import React, { useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, GridReadyEvent, RowStyle } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './SDataTable.scss';

interface Header {
  key: string;
  title: string;
  value?: string;
  align?: 'start' | 'center' | 'end' | 'right' | 'left';
  sortable?: boolean;
  width?: string | number;
  disableSort?: boolean;
}

interface SDataTableProps {
  headers: Header[];
  items?: any[];
  itemValue?: string;
  showSelect?: boolean;
  returnObject?: boolean;
  selected?: any[];
  selectStrategy?: 'single' | 'multiple';
  loading?: boolean;
  hover?: boolean;
  showExpand?: boolean;
  disableSort?: boolean;
  expanded?: any[];
  expandOnClick?: boolean;
  fixedHeader?: boolean;
  height?: string | number;
  currentPage?: number;
  itemsPerPage?: number;
  search?: string;
  noDataText?: string;
  hideFooter?: boolean;
  pageCnt?: number;
  options?: {
    pageCnt?: number;
  };
  resizable?: boolean;
  fixedTable?: boolean;
  tooltip?: boolean;
  footers?: any;
  onUpdateModelValue?: (value: any[]) => void;
  onUpdateOptions?: (options: any) => void;
  onUpdateExpanded?: (expanded: any[]) => void;
  onSortBy?: (sortBy: any[]) => void;
  children?: React.ReactNode;
  [key: string]: any;
}

export const SDataTable: React.FC<SDataTableProps> = ({
  headers = [],
  items = [],
  itemValue = 'id',
  showSelect = false,
  returnObject = false,
  selected = [],
  selectStrategy = 'multiple',
  loading = false,
  hover = true,
  showExpand = false,
  disableSort = false,
  expanded = [],
  expandOnClick = false,
  fixedHeader = false,
  height,
  currentPage = 1,
  itemsPerPage = 10,
  search = '',
  noDataText = '데이터가 없습니다.',
  hideFooter = false,
  pageCnt = 1,
  options,
  resizable = true,
  fixedTable = false,
  tooltip = false,
  footers,
  onUpdateModelValue,
  onUpdateOptions,
  onUpdateExpanded,
  onSortBy,
  children,
  ...attrs
}) => {
  const gridRef = useRef<AgGridReact>(null);

  const columnDefs = useMemo<ColDef[]>(() => {
    const cols: ColDef[] = [];

    if (showSelect) {
      cols.push({
        headerName: '',
        field: 'select',
        checkboxSelection: selectStrategy === 'multiple',
        headerCheckboxSelection: selectStrategy === 'multiple',
        width: 50,
        pinned: 'left',
        resizable: resizable,
        sortable: false,
        cellRenderer: (params: any) => {
          if (params.node.selectable === false) {
            return null;
          }
          return (
            <input
              type="checkbox"
              checked={params.node.isSelected()}
              onChange={(e) => {
                params.node.setSelected(e.target.checked);
              }}
            />
          );
        },
      });
    }

    headers.forEach((header) => {
      cols.push({
        headerName: header.title || header.value || header.key,
        field: header.key,
        sortable: !disableSort && header.sortable !== false,
        resizable: resizable,
        width: typeof header.width === 'number' ? header.width : undefined,
        flex: typeof header.width === 'string' ? 1 : undefined,
        cellStyle: {
          textAlign: header.align === 'end' || header.align === 'right' ? 'right' : header.align === 'center' ? 'center' : 'left',
        },
        headerClass: `header-cell header-align-${header.align || 'left'}`,
        cellRenderer: (params: any) => {
          const value = params.value;
          if (value === null || value === undefined || value === '') {
            return '-';
          }
          return value;
        },
      });
    });

    return cols;
  }, [headers, showSelect, disableSort, resizable, selectStrategy]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: resizable,
      sortable: !disableSort,
    };
  }, [resizable, disableSort]);

  const gridOptions: GridOptions = useMemo(() => {
    return {
      rowSelection: showSelect ? (selectStrategy === 'single' ? 'single' : 'multiple') : undefined,
      suppressRowClickSelection: !expandOnClick,
      animateRows: true,
      rowHeight: 42,
      headerHeight: 36,
      pagination: !hideFooter,
      paginationPageSize: itemsPerPage,
      paginationPageSizeSelector: false,
      suppressCellFocus: true,
      onSelectionChanged: (event) => {
        if (onUpdateModelValue) {
          const selectedRows = event.api.getSelectedRows();
          onUpdateModelValue(selectedRows);
        }
      },
      onSortChanged: (event) => {
        const sortModel = event.api.getColumnState().filter(col => col.sort).map(col => ({
          colId: col.colId,
          sort: col.sort,
        }));
        if (onSortBy) {
          onSortBy(sortModel);
        }
      },
      onRowClicked: () => {
        if (showExpand && expandOnClick) {
          // Expand row logic
        }
      },
      getRowStyle: (params): RowStyle | undefined => {
        if (hover && params.node.rowIndex !== undefined) {
          return {
            cursor: 'pointer',
          };
        }
        return undefined;
      },
      noRowsOverlayComponent: () => (
        <div className="text-center no-data" style={{ padding: '20px' }}>
          {noDataText}
        </div>
      ),
    };
  }, [
    showSelect,
    selectStrategy,
    expandOnClick,
    hideFooter,
    itemsPerPage,
    hover,
    showExpand,
    noDataText,
    onUpdateModelValue,
    onSortBy,
  ]);

  const rowData = useMemo(() => {
    return items || [];
  }, [items]);

  const onGridReady = useCallback((event: GridReadyEvent) => {
    if (selected && selected.length > 0) {
      selected.forEach((item) => {
        const value = returnObject ? item : item[itemValue];
        event.api.forEachNode((node) => {
          const nodeValue = returnObject ? node.data : node.data[itemValue];
          if (nodeValue === value) {
            node.setSelected(true);
          }
        });
      });
    }
  }, [selected, returnObject, itemValue]);

  const containerStyle: React.CSSProperties = {
    height: height ? (typeof height === 'number' ? `${height}px` : height) : '400px',
    width: '100%',
  };

  const gridClass = useMemo(() => {
    const classes = ['ag-theme-alpine', 's-data-table'];
    if (disableSort) classes.push('disable-sort');
    if (fixedTable) classes.push('fixed-table');
    if (!resizable) classes.push('no-vertical-lines');
    return classes.join(' ');
  }, [disableSort, fixedTable, resizable]);

  return (
    <div className={gridClass} style={containerStyle} {...attrs}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        gridOptions={gridOptions}
        onGridReady={onGridReady}
        loading={loading}
      />
      {children}
    </div>
  );
};

export default SDataTable;

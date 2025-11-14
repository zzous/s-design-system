import { onUnmounted, watch } from 'vue';

// ⭐️ excludedRef 파라미터 추가
const useOutsideClick = (elementRef, onClose, enabled, excludedRef = null) => {

  const handleClickOutside = (event) => {
    // 1. 클릭된 타겟 (event.target)이 제외할 요소 내부에 포함되는지 확인
    const isExcluded = excludedRef && excludedRef.value && excludedRef.value.contains(event.target);

    // 2. 외부 클릭 조건 확인
    // elementRef.value가 존재하고 (팝오버가 마운트됨)
    // AND 클릭 타겟이 elementRef 내부에 포함되지 않고
    // AND ⭐️ 클릭 타겟이 excludedRef 내부에 포함되지 않을 때만 onClose 실행
    if (elementRef.value && !elementRef.value.contains(event.target) && !isExcluded) {
      onClose();
    }
  };

  const addOutsideClickListener = () => {
    window.addEventListener('mousedown', handleClickOutside);
  };

  const removeOutsideClickListener = () => {
    window.removeEventListener('mousedown', handleClickOutside);
  };

  watch(enabled, (newEnabled) => {
    if (newEnabled) {
      addOutsideClickListener();
    } else {
      removeOutsideClickListener();
    }
  });

  onUnmounted(() => {
    removeOutsideClickListener();
  });
};

export default useOutsideClick;

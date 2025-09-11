import { onUnmounted, watch } from 'vue';

const useOutsideClick = (elementRef, onClose, enabled) => {

  const handleClickOutside = (event) => {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
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

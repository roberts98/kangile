import { toast } from 'react-toastify';

function failureAlert(text) {
  toast.error(text, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
}

export default failureAlert;

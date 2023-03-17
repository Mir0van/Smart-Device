import {initPhoneInput} from './modules/form-validate/init-phone-input.js';

const activateTelMask = () => {
  const inputTelParent = document.querySelector('.form__input-tel');
  initPhoneInput(inputTelParent);
};

export {activateTelMask};

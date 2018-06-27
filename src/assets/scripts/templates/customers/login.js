/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */

import $ from 'jquery';

const selectors = {
  recoverPasswordForm: '#RecoverPassword',
  hideRecoverPasswordLink: '#HideRecoverPasswordLink',
};

function checkUrlHash() {
  const hash = window.location.hash;
}

/**
 *  Show reset password success message
 */
function resetPasswordSuccess() {
  const $formState = $('.reset-password-success');

  // check if reset password form was successfully submited.
  if (!$formState.length) {
    return;
  }

  // show success message
  $('#ResetSuccess').removeClass('hide');
}

if ($(selectors.recoverPasswordForm).length) {
  checkUrlHash();
  resetPasswordSuccess();

  $(selectors.recoverPasswordForm).on('click', onShowHidePasswordForm);
}

export const ResponseMap = <T>(
  data: T,
  message?: string | '',
): { data: T; message: string } => {
  return {
    data,
    message: message || '',
  };
};

export const DtoErrorMessage = {
  empty_name: 'Name should not be empty!',
  empty_email: 'Email should no be empty!',
  empty_address: 'Address should not be empty!',
  empty_phone: 'Phone number should not be empty!',
  invalid_email: 'Invalid email entered!',
  invalid_phone: 'Invalid phone number entered!',
};

export const SUCCESS_MSG = {
  user_add_success: 'User added successfully.',
  user_update_success: 'User has been updated successfully.',
  user_delete_success: 'User has been deleted successfully.',
  pdf_generation_success: 'PDF has been generated.',
  pdf_download_success: 'PDF downloaded successfully.',
};

export const ERROR_MSG = {
  already_registered: 'Already registered user!',
  user_not_found: 'No user found',
};

export const DATABASE_ERROR_MSG = {
  user_save: 'User not saved!',
  user_update: 'User not updated!',
  user_delete: 'User not deleted!',
};

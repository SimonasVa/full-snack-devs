export class NavigationService {
  static BOOKS_PATH = "/books";
  static DONOR_PATH = `${NavigationService.BOOKS_PATH}/:id`;
  static REGISTER_BOOK_PATH = `${NavigationService.BOOKS_PATH}/create`;
  static FORM_PATH = `${NavigationService.BOOKS_PATH}/form`;
}

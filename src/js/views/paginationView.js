import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, there are other pagez
    if (this._data.page === 1 && numPages > 1) {
      return `Page 1, others`;
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }

    // Other page
    if (this._data.page < numPages) {
      return 'other';
    }
    // Page 1, there are NO other pagez
    return 'only 1 page';
  }
}

export default new PaginationView();

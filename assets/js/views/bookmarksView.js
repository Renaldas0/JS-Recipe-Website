import View from './View.js';
import previewView from './previewView.js'
import icons from 'url:../../images/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = "No bookmarks were found. Find a nice recipe to bookmark.";
  _successMessage = "";

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
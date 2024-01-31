class SearchView {
    _parentElement = document.querySelector('.search');
    _inputField = this._parentElement.querySelector('.search__field')

    getQuery() {
        const query = this._inputField.value;
        this._clearInput();
        return query;
    };

    _clearInput() {
        this._inputField.value = '';
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    };
};

export default new SearchView();
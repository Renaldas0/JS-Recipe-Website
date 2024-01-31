class SearchView {
    #parentElement = document.querySelector('.search');
    #inputField = this.#parentElement.querySelector('.search__field')

    getQuery() {
        const query = this.#inputField.value;
        this.#clearInput();
        return query;
    };

    #clearInput() {
        this.#inputField.value = '';
    }

    addHandlerSearch(handler) {
        this.#parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    };
};

export default new SearchView();
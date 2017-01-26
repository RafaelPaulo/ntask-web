exports.render = () => {
    return `<form>
            <div class="list">
                <label class="item item-input item-stacked-label">
                    <span class="input-label">Task</span>
                    <input type="text" data-task>
                </label>
            </div>
            <div class="padding">
                <button class="button button-positive buttom-block">
                    <i class="ion-compose"></i>Salvar
                </button>
            </div>
    </form>`
}

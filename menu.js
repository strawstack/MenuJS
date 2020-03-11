class Menu {
    constructor(_config) {
        if (_config == undefined) _config = {};

        let config = {};

        // Container
        config.container = _config.container || '.menu-area';

        // Title
        config.title = _config.title || 'Menu';

        // Items
        if (Object.keys(_config).length == 0 || _config.items == undefined) {
            // Demo items

        } else {
            // Given items array
            let item = _config.items;



        }

    }
}

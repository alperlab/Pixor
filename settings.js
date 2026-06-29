console.log("Settings loaded");

const Settings = {

    save(key, value) {

        localStorage.setItem(key, JSON.stringify(value));

    },

    load(key, defaultValue = null) {

        const value = localStorage.getItem(key);

        if (!value) return defaultValue;

        try {

            return JSON.parse(value);

        } catch {

            return defaultValue;

        }

    }

};

let js_transform = (js) => js.replace(/([>`}])(\s*\n\s*)([<`\$])/mg,"$1$3").replace(/\s*\n\s*/mg,' ')

module.exports = {
    lpcandy: {
        root_path: __dirname + "/lpcandy",
        entry_point: "front/site/index.js",
        bundle_path: "public/assets/lpcandy.min.js",
        js_transform
    },
    projects: {
        root_path: __dirname + "/lpcandy",
        entry_point: "../src/index.js",
        bundle_path: "../build/projects.min.js",
        js_transform
    }
}
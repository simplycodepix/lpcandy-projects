let js_transform = (js) => js.replace(/([>`}])(\s*\n\s*)([<`\$])/mg,"$1$3").replace(/\s*\n\s*/mg,' ')

module.exports = {
    lpcandy: {
        entry_point: "lpcandy/front/site/index.js",
        bundle_path: "lpcandy/public/assets/lpcandy.min.js",
        js_transform
    },
    projects: {
        entry_point: "lpcandy/front/extra/projects/index.js",
        bundle_path: "build/projects.min.js",
        js_transform
    }
}
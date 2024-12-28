void function(script) {
    const { searchParams } = new URL(script.src);
    var path = searchParams.get('src');
    var info = {
        mode: 'cors'
    };
    fetch(path, info).then(r => r.text()).then(content => {
        script.outerHTML = content;
    });
}(document.currentScript);
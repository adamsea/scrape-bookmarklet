var f = document.createElement('form');
f.setAttribute('action', '<your-target-posting-domain>');
f.setAttribute('method', 'post');
f.innerHTML = '<input type="hidden" name="quote" id="clearview-blogs-write-post-selected-text" />' +
    '<input type="hidden" name="title" id="clearview-blogs-write-post-source-title" />' +
    '<input type="hidden" name="source_url" id="clearview-blogs-write-post-source-url" />';

document.body.appendChild(f);
document.getElementById('clearview-blogs-write-post-selected-text').value = window.getSelection().toString();
document.getElementById('clearview-blogs-write-post-source-url').value = window.location;
document.getElementById('clearview-blogs-write-post-source-title').value = document.title;

f.submit();

(function () {
    const base = document.createElement('base');
    const path = window.location.pathname || '/';
    const segments = path.split('/').filter(Boolean);
    const isGitHubPages = window.location.hostname.includes('github.io');

    if (isGitHubPages && segments.length > 0) {
        base.href = '/' + segments[0] + '/';
    } else {
        base.href = './';
    }

    document.head.insertBefore(base, document.head.firstChild);
})();

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = {}
    cpdomains.forEach(d => {
        let [count, domain] = d.split(' ')
        while (domain) {
            map[domain] = (map[domain] || 0) + parseInt(count)
            domain = domain.replace(/^[a-z]+\.?/, '')
        }
    });
    return Object.entries(map).map(entry => `${entry[1]} ${entry[0]}`)
};
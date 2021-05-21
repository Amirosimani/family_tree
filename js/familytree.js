// var chart = new OrgChart(document.getElementById("tree"), {
//     mouseScrool: OrgChart.action.none,
//     menu: {
//         pdf: { text: "Export PDF" },
//         // png: { text: "Export PNG" },
//         // svg: { text: "Export SVG" },
//         csv: { text: "Export CSV" }
//     },
//     nodeMenu: {
//         pdf: { text: "Export PDF" },
//         // png: { text: "Export PNG" },
//         // svg: { text: "Export SVG" }
//     },
//         nodeBinding: {
//             field_0: "name",
//             field_1: "title",
//             img_0: "img"
//         },
//         nodes: [
//             { id: 1, tags: ["ceo"], name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
//             { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
//             { id: 3, pid: 1, tags: "RR", name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
//             { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
//             { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
//             { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
//             { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
//             { id: 8, pid: 2, tags: ["assistant"], name: "Rudy Griffiths", title: "Assistant", img: "https://cdn.balkan.app/shared/9.jpg" },
//             { id: 9, pid: 2, tags: ["assistant"], name: "ساره", title: "Assistant", img: "https://cdn.balkan.app/shared/10.jpg" }

//         ]
//     });

OrgChart.templates.ana.defs = '<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart"><path fill="#F57C00" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/><g>';


var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    collapse: {
        level: 2,
        allChildren: true
    },

    menu: {
        pdf: {
            text: "Export PDF"
        },
        // png: { text: "Export PNG" },
        // svg: { text: "Export SVG" },
        csv: {
            text: "Export CSV"
        }
    },
    nodeBinding: {
        field_0: "name",
        field_1: "dob",
        img_0: "img"
    }
});

chart.on('render-link', function(sender, args) {
    if (args.cnode.ppid != undefined) {
        args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '"/>';
    }
});

chart.load([{
        id: 1,
        name: "زهرا حق‌نگهدار",
        dob: "۲۹/۲/۱۳۳۹",
        img: "https://cdn.balkan.app/shared/2.jpg"
    },
    {
        id: 2,
        pid: 1,
        tags: ['partner'],
        name: "محمدتقی ایمانی",
        dob: "۱/۷/۱۳۳۲",
        img: "https://cdn.balkan.app/shared/2.jpg"
    },
    {
        id: 3,
        pid: 1,
        ppid: 2,
        name: "ساره ایمانی",
        dob: "۱۵/۱/۱۳۶۵",
        img: "https://cdn.balkan.app/shared/2.jpg"

    },
    {
        id: 4,
        pid: 1,
        ppid: 2,
        name: "امیرحسین ایمانی",
        dob: "۲۱/۶/۱۳۶۶",
        img: "https://cdn.balkan.app/shared/2.jpg"
    },
]);
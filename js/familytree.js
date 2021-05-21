      
var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
         menu: {
        pdf: { text: "Export PDF" },
        // png: { text: "Export PNG" },
        // svg: { text: "Export SVG" },
        csv: { text: "Export CSV" }
    },
    nodeMenu: {
        pdf: { text: "Export PDF" },
        // png: { text: "Export PNG" },
        // svg: { text: "Export SVG" }
    },
     nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        nodes: [
            { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

            { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 4, pid: 3, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
        ]
    });    
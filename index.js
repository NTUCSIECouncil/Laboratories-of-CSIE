professors = {
    "Cj_lin": ["林智仁", "Chih-Jen Lin", "Machine Learning Lab", ["ML", "Optimization"]],
    "Sd_lin": ["林守德", "Shou-De Lin", "Machine Discovery and Social Network Mining Lab", ["AI", "ML"]],
    "St_chen": ["陳尚澤", "Shang-Tse Chen", "Machine Learning and Security", ["AI", "ML"]],
    "Cs_fuh": ["傅楸善", "Chiou-Shann Fuh", "Digital Camera and Computer Vision Lab", ["CV", "DIP"]],
    "Sh_hung": ["洪士灝", "Shih-Hao Hung", "Performance, Application and Security Lab", ["System", "Optimization", "Computing", "Security"]],
    "Cs_shih": ["施吉昇", "Chi-Sheng Shih", "Embedded System and Wireless Networking Lab", ["System", "Optimization"]],
    "Cw_lin": ["林忠緯", "Chung-Wei Lin", "Cyber-Physical Systems Lab", ["Security", "System"]],
    "Pf_liu": ["劉邦鋒", "Pangfeng Liu", "Parallel and Distributed Processing Lab", ["Computing", "ML", "System"]],
    "Tony_tan": ["陳偉松", "Tony Tan", "Logic and database lab", ["Logic&Automata"]],
    "J_hsiang": ["項潔", "Jieh Hsiang", "Automated Reasoning Laboratory", []],
    "Tw_kuo": ["郭大維", "Tei-Wei Kuo", "Embedded System and Wireless Networking Lab", ["System", "IoT", "Computing"]],
    "Ac_pang": ["逄愛君", "Ai-Chun Pang", "Embedded System and Wireless Networking Lab", ["Network", "Computing", "AI", "IoT"]],
    "Ht_lin": ["林軒田", "Hsuan-Tien Lin", "Computational Learning Lab", ["AI", "ML"]],
    "Yn_chen": ["陳縕儂", "Yun-Nung Chen", "Machine Intelligence and Understanding", ["AI", "ML", "NLP"]],
    "Yp_hung": ["洪一平", "Yi-Ping Hung", "Image and Vision Lab", ["CV", "VR&AR", "AI", "Blockchain"]],
    "Yh_li": ["李彥寰", "Yen-Huan Li", "Lab for Learning Theory and Optimization Methods", ["ML", "Optimization"]],
    "Cs_chen": ["陳祝嵩", "Chu-Song Chen", "AI Application and Integration (AI^2) Lab", ["AI", "CV"]],
    "Hh_chen": ["陳信希", "Hsin-Hsi Chen", "Natural Language Processing Lab", ["NLP", "FinTech", "IR", "eHealth"]],
    "Cl_yang": ["楊佳玲", "Chia-Lin Yang", "Embedded Computing Lab", ["System", "ML", "IoT"]],
    "Cw_hsueh": ["薛智文", "Chih-Wen Hsueh", "Embedded System and Wireless Networking Lab", ["System", "Blockchain", "FinTech"]],
    "Yy_chuang": ["莊永裕", "Yung-Yu Chuang", "Communication and Multimedia Lab", ["CV", "Graphics"]],
    "Lp_cheng": ["鄭龍磻", "Lung-Pan Cheng", "Human Computer Interaction Lab", ["HCI", "VR&AR"]],
    "P_lin": ["林風", "Phone Lin", "Mobile Communication Networking Lab", ["IoT", "Network", "System"]],
    "Yj_hsu": ["許永真", "Jane Yung-Jen Hsu", "Intelligent Agents Lab", ["AI", "eHealth", "NLP"]],
    "Cf_chou": ["周承復", "Cheng-Fu Chou", "Communication and Multimedia Lab", ["Network", "ML", "Graphics", "System"]],
    "Lc_fu": ["傅立成", "Li-Chen Fu", "Intelligent Robotics and Automation Lab", ["CV", "VR&AR", "Robot", "eHealth"]],
    "Hc_hsiao": ["蕭旭君", "Hsu-Chun Hsiao", "Network Security Lab", ["Security"]],
    "Yf_tseng": ["曾宇鳳", "Yu-Feng Tseng", "Bioinformatics and Cheminformatics Lab", ["ML", "eHealth"]],

    // new professors add by hensuu:
    "Rf_chang": ["張瑞峰", "Ruey-Feng Chang", "Medical Image Processing Lab", ["eHealth", "CV", "DIP", "ML", "AI"]],
    "Mike_chen": ["陳彥仰", "Mike Y. Chen", "Human Computer Interaction Lab", ["ML", "HCI", "AR&VR", "AI"]],
    "Hm_tsai": ["蔡欣穆", "Hsin-Mu Tsai", "Mobile and Vehicular Network Lab", ["ML", "Light", "Network", "AI"]],
    "Pj_cheng": ["鄭卜壬", "Pu-Jen Cheng", "Web Mining and Information Retrieval Lab", ["IR", "ML", "AI"]],
    "Sw_liao": ["廖世偉", "Shih-Wei Liao", "A Blockchain Consensus Lab", ["Blockchain", "FinTech", "AI"]],
    "Sw_li": ["黎士瑋", "Shih-Wei Li", "Security and Software Systems Lab", ["System", "Security"]],
    // "": ["", "", "", []],
}

// const fs = require("fs");

// data = "---\nauthor: 蔡仲恩\n---\n"

// for(var key in professors) {
//     fs.writeFile("_posts/2021-05-04-" + key + ".md", data, (err) => {
//         // In case of a error throw err.
//         if (err) throw err;
//     })
// }
var selected = [];

window.addEventListener('load', function () {
    console.log("It's loaded!");
    var sections = document.getElementsByClassName("name_section");

    for (let i = 0; i < sections.length; ++i) {

        let id = sections[i].id;
        // console.log(id);
        // Change professor information according to json
        sections[i].children[0].innerHTML = professors[id][0];
        sections[i].children[1].innerHTML = professors[id][1];
        sections[i].children[2].innerHTML = professors[id][2].toUpperCase();
    }
    var filter = document.getElementById("filter");
    for (let i = 0; i < filter.children.length; ++i) {
        filter.children[i].addEventListener("click", filter_click_event);

    }
})

function filter_click_event(event) {
    if (selected.includes(event.currentTarget.id)) {
        selected = selected.filter(x => x != event.currentTarget.id);
        
        event.currentTarget.classList.remove("ring-orange-300");
        event.currentTarget.classList.remove("ring");
    } else {
        selected.push(event.currentTarget.id);
        
        event.currentTarget.classList.add("ring-orange-300");
        event.currentTarget.classList.add("ring");
    }

    var sections = document.getElementsByClassName("professor");

    for (let i = 0; i < sections.length; ++i) {
        let id = sections[i].children[1].id;
        console.log(id);
        let intersection = selected.filter(x => professors[id][3].includes(x));
        if (intersection.length == 0 && selected.length > 0) {
            sections[i].classList.add("hidden");
        } else {
            sections[i].classList.remove("hidden");
        }
    }
}
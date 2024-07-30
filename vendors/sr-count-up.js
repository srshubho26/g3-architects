const srCountUp = (duration=2000, gap=50) => {
    const counts = document.querySelectorAll('.sr-count-up');
    const completedCounts = [];
    window.onscroll = ()=>{
        if(counts.length===completedCounts.length)return;
        for(let count of counts)intervalInit(count);
    }

    const intervalInit = el =>{
        const visualPoint = el.offsetTop - window.innerHeight;
        if(completedCounts.includes(el) || window.scrollY<visualPoint)return;

        let i=0;
        let interval;
        const range = parseInt(el.textContent);
        el.textContent = 0;
        completedCounts.push(el);
    
        interval = setInterval(()=>{
            i += ((range * gap)/duration);
            if (i >= range){
                i=range;
                clearInterval(interval);
            }
            el.textContent = Math.trunc(i);
        }, gap);
    }
}
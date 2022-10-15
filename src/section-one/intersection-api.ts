const threshold = 0.2;

const imageData = [
    {
        index: 0,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_50F02AD66B9B2EECE6FDF55515DD2C28.jpg',
    },
    {
        index: 1,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_A25FD6F139C4C00CC2E3F36EFF22C276.jpg',
    },
    {
        index: 2,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_7EA1DD60B730004DF8574B6F0F964F36.jpg',
    },
    {
        index: 3,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_C4C38F65C2C02AF10317AF8498AEDCDC.jpg',
    },
    {
        index: 4,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_B1D0BCEE9474E818C50DDF2FE4442201.jpg',
    },
    {
        index: 5,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_68BBDADB99D55DB5EC88D82F36CB2B6F.jpg',
    },
    {
        index: 6,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_50F02AD66B9B2EECE6FDF55515DD2C28.jpg',
    },
    {
        index: 7,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_A25FD6F139C4C00CC2E3F36EFF22C276.jpg',
    },
    {
        index: 8,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_7EA1DD60B730004DF8574B6F0F964F36.jpg',
    },
    {
        index: 9,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_C4C38F65C2C02AF10317AF8498AEDCDC.jpg',
    },
    {
        index: 10,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_B1D0BCEE9474E818C50DDF2FE4442201.jpg',
    },
    {
        index: 11,
        src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_68BBDADB99D55DB5EC88D82F36CB2B6F.jpg',
    },
];

function addImage(container: any, data: any) {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('class', 'lazy-image');
    imageElement.setAttribute(
        'src',
        'https://cdn-icons-png.flaticon.com/512/456/456246.png'
    );
    imageElement.setAttribute('data-index', data.index);
    return container.appendChild(imageElement);
}

function drawTemplate() {
    const container = document.getElementById('image-container');
    for (let i = 0; i < imageData.length; i++) {
        addImage(container, imageData[i]);
    }
}

function exec() {
    const observerOption = {
        rootMargin: '0px 0px 0px 0px',
        threshold,
    };

    // TODO
    let callback = (entries: any[], observer: any) => {
        entries.forEach((entry, index) => {
            console.log("FOR EACH")
            if (entry.isIntersecting) { // 뷰포트와 해당 요소가 threshold(0.2 =20%만큼 교차)만큼 교차됐을 때 
                console.log("isIntersecting",imageData[index].src)
                entry.target.src = imageData[index].src
                observer.unobserve(entry.target)    // entry.target에 대해 관찰 종료
            }
        });
      };
      
    let observer = new IntersectionObserver(callback, observerOption);
    
    let elems = document.querySelectorAll('.lazy-image')
    elems.forEach(el => {observer.observe(el)})
    console.log("OBSERVE START")
}

export const execIntersection = () => {
    drawTemplate();
    exec();
};

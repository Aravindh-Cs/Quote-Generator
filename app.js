const mahabharatquote = [
    {quote:'“Peace comes from within. When one conquers his inner enemies, peace will come automatically.”',names:'– Krishna'},
    {quote:'"Patience and silence are two strong weapons. patience makes you mentally strong,silence makes you emotionally strong."',names:'– Draupadi'},
    {quote:'"Know that which is beyond the physical and the perishable, and you will find true peace."',names:'– Arjuna'},
    {quote:'“It is better to live one day as a lion than 1000 years as a jackal."',names:'- Yudhishthira'},
    {quote:'“The one who has conquered his mind is free from all sorrows and fears.”',names:'– Krishna'},
    {quote:'"Cleverness does not always lead to gain nor stupidity to poverty"',names:'– Vidura'},
    {quote:'“The strength of a thousand is not as powerful as the strength of one with faith.”',names:'– Bhishma'},
    {quote:'“To understand karma,You must realize that thoughts are things”',names:'– Karna'},
    {quote:'“One who sees inaction in actionn, and action in inaction ,is intelligent among men”',names:'– Krishna'},
    {quote:'“Truthfulness, purity of mind and heart, self-control and austerity are marks of religion.”',names:'– Drona'},
    {quote:'“The life of a fool is empty of faith and full of fears.”',names:'– Arjuna'},
    {quote:"Strength isn't about how much you can handle before you break It's about how much you can endure after you've been broken.",names:'– Draupadi'},
    {quote:'“The true teacher is one who helps you realize the divinity within yourself.”',names:'– Krishna'},
    {quote:'“Happiness cannot be attained by the weak; it can only be achieved by those who have strength.”',names:'– Bhishma'},
    {quote:'“All creatures are equal in suffering and death.”',names:'– Vidura'},
    {quote:'“A wise man should not grieve for the things which he has not, but rejoice for those which he has.”',names:'– Yudhishthira'},
    {quote:'"A man is not born great,But greatness is achieved through hardwork and dedication"',names:'– Drona'},
    {quote:'“Anger clouds reason and leads to destruction.”',names:'– Karna'},
    {quote:'“The weak cannot forgive; the strong can, forgiveness is an attribute of the strong.”',names:'– Krishna'},
    {quote:'“When duty is neglected, calamity follows like a wheel of a cart.”', names:'– Bhagavad Gita'}];
    
    const biblequote = [
    '"The Globe God’s Love is Shed Abroad throughout The World. We are to take that Love and Proclaim it and Model it for the world to witness so that they may experience Christ though us."',
    '"The Holy Spirit, The WORD, and The New Birth are the three elements in your life that will empower you and enable you to live a resurrected life; which is what God has called us, equipped us, and purposed us to do through His Power!"',
    '"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."',
    '"The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?"',
    '"Be strong, and let your heart take courage, all you who wait for the Lord!"',
    '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
    '"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."',
    '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God`s will is—his good, pleasing, and perfect will."',
    '"Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you."',
    '"The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing."',
    '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."',
    '"Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you."',
    '"The Beauty of the image of the logo that God gave us is that it truly defines and encompasses our ministry and five key foundational Biblical truths."'];
    
    const mahabharatimg = ["images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png",
    "images/m6.png","images/m7.png","images/m8.png","images/m9.png","images/m10.png","images/m11.png",
    "images/m12.png","images/m13.png","images/m14.png","images/m15.png","images/m16.png","images/m17.png",
    "images/m18.png","images/m19.png","images/m0.png"];
    
    const bibleimg = ["images/b1.png","images/b2.png",
    "images/b3.png","images/b4.png","images/b0.png"];
    
    const jokeimg = [
    "images/j2.png","images/j3.png","images/j4.png",
    "images/j5.png","images/j6.png","images/j1.png"]
    
    let currentimg = -1;
    let currentquotes = -1;
    
    const mquote = document.querySelector('.mquote');
    const mname = document.querySelector('.mname');
    const mimg = document.querySelector('.mimg');
    
    function mahabarat()
    {
        currentimg = (currentimg+1)%mahabharatimg.length;
        currentquotes = (currentquotes+1)%mahabharatquote.length;
        mimg.src = mahabharatimg[currentquotes];
        mquote.innerHTML = mahabharatquote[currentquotes].quote;
        mname.innerHTML = mahabharatquote[currentquotes].names;
    }
    
    const bquote = document.querySelector('.bquote');
    const bimg = document.querySelector('.bimg');
    
    function bible()
    {
        currentimg = (currentimg+1)%bibleimg.length;
        currentquotes = (currentquotes+1)%biblequote.length;
        bimg.src = bibleimg[currentimg];
        bquote.innerHTML = biblequote[currentquotes];     
    }
    
    const jquote = document.querySelector('.qn');
    const jans = document.querySelector('.ans');
    const jimg = document.querySelector('.jimg');
    
    function joke()
    {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then((res)=>res.json())
        .then((msg)=>{
            jquote.innerHTML =msg.setup;
            jans.innerHTML ='–'+msg.punchline; 
        })
        currentimg = (currentimg+1)%jokeimg.length;
        jimg.src = jokeimg[currentimg];
    }
    
    const list = document.querySelector('nav');
    function Menu(e)
    {
        e.name = e.name || 'menu'
        e.name === 'menu' ? (e.name = 'close',list.classList.add('opacity-100')) : (e.name = 'menu',list.classList.remove('opacity-100'));
    }
    
    const mbox = document.querySelector('.mbox');
    const bbox = document.querySelector('.bbox');
    const tbox = document.querySelector('.tbox');
    const jbox = document.querySelector('.jbox');
    const boxes = document.querySelectorAll('.box');
    const para = document.querySelector('.para');
    const links = document.querySelectorAll('a');
    links.forEach((link)=>
    {
        link.addEventListener('click',()=>
        {
            list.classList.remove('opacity-100')
            if(link.classList.contains('home'))
            {
            boxes.forEach((box)=>
            {
                para.classList.remove('hidden');
                box.classList.add('hidden')
            })
            }
            else if(link.classList.contains('gita'))
            {
                para.classList.add('hidden');  
                bbox.classList.add('hidden');
                jbox.classList.add('hidden');
                mbox.classList.remove('hidden');  
    
            }
            else if(link.classList.contains('bible'))
            {
                para.classList.add('hidden');
                mbox.classList.add('hidden');
                jbox.classList.add('hidden');
                bbox.classList.remove('hidden');
            }
            else if(link.classList.contains('joke'))
            {
                para.classList.add('hidden');
                mbox.classList.add('hidden');
                bbox.classList.add('hidden');
                jbox.classList.remove('hidden');
            }
        })
    })
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn)=>
    {
        btn.addEventListener('click',()=>
        {
            if(btn.classList.contains('mbtn'))
            {
                mahabarat();
            }
            else if(btn.classList.contains('bbtn'))
            {
                bible();
            }
            else if(btn.classList.contains('jbtn'))
            {
                joke();
            }
        })
    })
    
    boxes.forEach((box)=>
    {
        box.classList.add('hidden')
    })
    
    const mcopy = document.querySelector('.mcopy');
    const bcopy = document.querySelector('.bcopy');
    const jcopy = document.querySelector('.jcopy');
    const copybtns = document.querySelectorAll('.copy');
    
    copybtns.forEach((copybtn)=>
    {
        copybtn.addEventListener('click',()=>
        {
            if(copybtn.classList.contains('mcopy'))
            {
                let text = mquote.innerHTML + mname.innerHTML;
                console.log(text);
                copy(text,mcopy)
            }
            else if(copybtn.classList.contains('bcopy'))
            {
                let text = bquote.innerHTML;
                console.log(text);
                copy(text,bcopy)
            }
            else if(copybtn.classList.contains('jcopy'))
            {
                let text = jquote.innerHTML + jans.innerHTML;
                console.log(text);
                copy(text,jcopy);
            }
        })
    })
    function copy(text,btnname)
    {
    navigator.clipboard
    .writeText(text)
    .then(()=>
    {
        btnname.innerHTML='Copied!'
        function hidden()
        {
            btnname.innerHTML = 'Copy'
        }
        setTimeout(hidden,500)
    })
    .catch((error)=>
    {
        console.log('not copied:',error);
    })
    }
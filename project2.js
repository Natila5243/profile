const Home=document.querySelector(".header");
        const aboutMe=document.querySelector(".about");
        const project=document.getElementById("projects");
        const contact=document.querySelector(".contact");
        const skills=document.getElementById("skils");
        const btnhome=document.getElementById("Home");
        const btnabout=document.querySelector("#about");
        const btnproject=document.querySelector("#project");
        const btncontact=document.querySelector("#contact");
        const btnskills=document.querySelector("#skill");

        btnhome.addEventListener("click", function(){
            Home.scrollIntoView({behavior: "smooth"})
        });
        btnabout.addEventListener("click", function(){
            aboutMe.scrollIntoView({behavior: "smooth"})
        });
        btnproject.addEventListener("click", function(){
            project.scrollIntoView({behavior: "smooth"})
        });
        btncontact.addEventListener("click", function(){
            contact.scrollIntoView({behavior: "smooth"})
        });
        btnskills.addEventListener("click", function(){
            skills.scrollIntoView({behavior: "smooth"})
        });


        const visitmywork=document.querySelector(".visit-ancer");
        const text = "I am Natnael kidane  a web developer and creative software!";
        const typingElement = document.querySelector(".animate_text");

        let typingindex = 0;
        function natila() {
            if (typingindex < text.length) {
                typingElement.textContent += text.charAt(typingindex);
                typingindex++;
                setTimeout(natila, 200);
            }
        }
        natila();
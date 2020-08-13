/*Aos*/

AOS.init ()
/*Scroll on top button*/
var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
     
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
   
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  } 
  

  /*Counter*/
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      

      if(count < target) {
        counter.innerText = count + inc;
        requestAnimationFrame(updateCount, 1);
      } else {
        count.innerText = target;
        
      }
    }

    updateCount();
      
  });

 
  
  
  
  /*Buttons*/
  let inf = document.getElementById('buttonInfo');
  let schedule = document.getElementById('schedule-button');
  let contact = document.getElementById('contact-button');
  let appointment = document.getElementById('appointment-button');

 
  inf.onclick = function scrolldiv() { 
    window.scrollTo(0,  
findPosition(document.getElementById("info"))); 
} 
function findPosition(obj) { 
    let currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop];
    } 
  }

  schedule.onclick = function scrolldiv() { 
    window.scrollTo(0,  
findPosition(document.getElementById("schedule"))); 
} 
function findPosition(obj) { 
    let currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop];
    } 
  }

  contact.onclick = function scrolldiv() { 
    window.scrollTo(0,  
findPosition(document.getElementById("contact"))); 
} 
function findPosition(obj) { 
    let currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop];
    } 
  }

  appointment.onclick = function scrolldiv() { 
    window.scrollTo(0,  
findPosition(document.getElementById("appointment"))); 
} 
function findPosition(obj) { 
    let currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop];
    } 
  }



  
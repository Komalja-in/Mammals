//hello enter total images here
let totalImages = 16;
let totalSounds = 4;
let totalParallaxImages = 47;
let scrollSpeed = 20;
let fullOpacity=0.7;
let hasOpacity=[1,2,3,4,5,9,10,11,12,13,14,15,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47];


//enter the info here
function renderParallaxImages()
{
  //subf(small Image number pi, X loation, Y location, Parent Number, Total parallax in pixels relative to 1920X1080, true if opacity is enabled - Ignore for now )
  subf(2,153, 164, 3, 100, true);
  subf(3,390, 614, 3, 60, true);
  subf(4,1130, 290, 3, 60, true);
  subf(5,1789, 540, 3, 10, true);
  
  subf(6,453, 414, 4, 70);
  subf(7,1050, 300, 4, 60);
  subf(8,1566, 306, 4, 70);
  
  subf(9,395, 425, 4, 50, true);
  subf(10,606, 333, 4, 50, true);
  subf(11,1020, 553, 4, 80, true);
  subf(12,1499, 585, 4, 50, true);
  subf(13,1758, 108, 4, 20, true);
  
  subf(14,390, 645, 5, 10, true);
  subf(15,718, 740, 5, 10, true);
  
  subf(16,840, 155, 6, 30);
  subf(21,1080, 70, 6, 30, true);
  subf(22,1168, 430, 6, 20, true);
  
  subf(17,1568, 350, 6, 40);
  subf(23,1820, 195, 6, 20, true);
  
  subf(18,390, 385, 7, 10);
  subf(19,718, 130, 7, 10);
  subf(24,328, 580, 7, 10, true);
  subf(25,698, 75, 7, 10, true);
  subf(26,1118, 27, 7, 10, true);
  
  subf(20,1618, 360, 7, 10);
  subf(27,1685, 640, 7, 10, true);
  subf(28,200, 200, 8, 10, true);
  
  subf(29,470, 165, 9, 10, true);
  subf(30,970, 465, 9, 10, true);
  
  subf(31,218, 480, 10, 10, true);
  subf(32,790, 370, 10, 10, true);
  subf(33,1300, 760, 10, 10, true);
  subf(34,1798, 300, 10, 10, true);
  subf(1,633, 248, 10, 40, true);
  
  subf(35,1168, 180, 11, 10, true);
  subf(37,1768, 840, 11, 10, true);  
  subf(38,548, 410, 12, 40, true);
  subf(39,998, 680, 12, 10, true);
  
  subf(40,868, 5, 13, 10, true);
  subf(41,1063, 230, 14, 10, true);
  subf(42,1168, 210, 14, 10, true);
  subf(43,1498, 105, 14, 10, true);
  subf(44,1678, 70, 14, 10, true);
  subf(45,1878, 460, 14, 10, true);
  
  subf(46,1278, 670, 15, 10, true);
  subf(47,238, 330, 16, 10, true);

  //subf(8,1758, 108, 1, 100, true);
  
  
  //soundplay(x location, parent img no)
  soundplay(1,2,1);
  soundplay(1,2,5);
  soundplay(1,2,10);
  soundplay(2,50,2);
  soundplay(3,200,4);
  soundplay(4,5,9);
}


let ratio=1;
let intro, about, references;
let totalw = 0;
let displayw = 0;

function setup() {
  pixelDensity(1);
  opt=loadImage("ref/optest.png");
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0, "fixed");
  loadingBG = loadImage("ref/Loading-BG.png");
  //imageMode(CENTER);

  intro = document.getElementById("intro");
  about = document.getElementById("about");
  mute = document.getElementById("mute");
  soundButton=document.getElementById("soundButton");
  references = document.getElementById("references");
  aboutButton = document.getElementById("aboutButton");
  referencesButton = document.getElementById("referencesButton");
  
  
  
  

  
  
    //SOUND//
  song[1] = loadSound('ref/s1.mp3',loadComplete);
  song[2] = loadSound('ref/s2.mp3',loadComplete);
  song[3] = loadSound('ref/s3.mp3',loadComplete);
  song[4] = loadSound('ref/s4.mp3',loadComplete);

  
  // for (let i = 1; i < totalSounds; i++) {
  //   append(song, loadSound("s" + (i + 1) + ".mp3",loadComplete));
  // }
  
  
  img[1] = loadImage("a1.jpg");
  for (let i = 1; i < totalImages; i++) {
    append(img, loadImage("a" + (i + 1) + ".jpg",loadComplete));
  }
  
  pimg[1] = loadImage("parallax/img \(1\).png");
  for (let i = 1; i < totalParallaxImages; i++) {
    append(pimg, loadImage("parallax/img \(" + (i + 1) + "\).png",loadComplete));
    
    
  }
  
   oimg[0] = loadImage("opacity/oimg \(4\).png");
  for(let i=0;i<hasOpacity.length;i++)
    {
      oimg[hasOpacity[i]]=loadImage("opacity/oimg \(" + (hasOpacity[i]) + "\).png",loadComplete);
    }
    
  noCursor();
  
  progressIcon=loadImage("ref/Progress-icon.png",loadComplete);

  //intro = loadImage("Introductionwindow.png",loadComplete);

  //about = loadImage("About.png",loadComplete);
  
  
  
  
  
}




let loadingBG, progressIcon;
let loadCompleteCount=0;

function loadComplete()
{
  loadCompleteCount++;
  print(loadCompleteCount);
}

function recalculate() {
  displayw = (windowHeight * img[1].width) / img[1].height;
  totalw = displayw * 16 - windowWidth;
  ratio=windowHeight/1080;
}

let app = 0;

function startStory() {
  intro.style.display = "none";
  
  horizontalScroll = true;
}

let soundClickedValue = false;
function soundClicked() {
  soundClickedValue = !soundClickedValue;

  if (soundClickedValue) {
    mute.src = "ref/Sound off.svg";
    song[1].setVolume(0);
    song[2].setVolume(0);
    song[3].setVolume(0);
    song[4].setVolume(0);
    print("pause");
  } else {
    mute.src = "ref/Sound on.svg";
    song[1].setVolume(1);
    song[2].setVolume(1);
    song[3].setVolume(1);
    song[4].setVolume(1);
  }
}

function aboutClicked() {
  intro.style.display = "none";
  //references.style.display = "none";
  aboutOpen = !aboutOpen;
  if (aboutOpen) {
    
    about.style.display = "flex";
    horizontalScroll = false;
    aboutButton.innerText = 'Close';
  } else {
    about.style.display = "none";
    horizontalScroll = true;
    aboutButton.innerText = 'About';
  }
}

let refOpen=false;

function refClicked() {
  references.style.display = "none";
  intro.style.display = "none";
  refOpen = !refOpen;
  if (refOpen) {
    
    references.style.display = "flex";
    horizontalScroll = false;
  } else {
    references.style.display = "none";
    horizontalScroll = true;
  }
}

var a, b, cnv;
var x = 0,
  y = 0;
let img = [];
let pimg = [];
let song=[];
let oimg=[];
var opt;
let rs = 0;
let vel = 0;
let horizontalScroll = false;
let introClicked = true;
let aboutOpen = false;
let loaded=false;

function draw() {
  
 
  if(loadCompleteCount==103)
    {
      
      if(loaded==false)
        {
              aboutButton.style.display="flex";
                referencesButton.style.display="flex";
               soundButton.style.display="flex";
                intro.style.display="flex";
                        loaded=true;
        }
  



      
  ratio=windowHeight/1080;
  displayw = (windowHeight * img[1].width) / img[1].height;
  totalw = displayw * 16 - windowWidth;
      
      if (x > 0) x = 0;
  if (x < -totalw) x = -totalw;

  let difference = x - vel;
  vel += 0.05 * difference;

  background(c, 100, 0);
  
  for (let i = 0; i < totalImages; i++) {
    
    //image(img[1+i],vel+prsw+noise(frameCount*0.008)*100,0,rsw,windowHeight);
    image(
      img[1 + i],
      vel + i * displayw ,
      0,
      (windowHeight * img[1].width) / img[1].height,
      windowHeight
    );
    
   
    
    
  }
  
  renderParallaxImages();

 
  textSize(25);
  //text(floor(x-1/displayw)*-1+","+floor(mouseX*ratio),mouseX, mouseY);

  if(!horizontalScroll)
    {
      if(windowWidth/windowHeight>loadingBG.width/loadingBG.height)
        {
          //image width = window width
          //scale height accordingly
          image(loadingBG,0,0,windowWidth,loadingBG.height*windowWidth/loadingBG.width);
        }
      else
        {
          image(loadingBG,0,0,loadingBG.width*windowHeight/loadingBG.height,windowHeight);
        }
      
      
      
    }
     
 
  fill(165, 4, 4,100)
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
    image(progressIcon,-x*width*0.8/totalw+width*0.1,height-progressIcon.height*1.05, 0.05 * width, progressIcon.height * 0.05 * width / progressIcon.width);
  
  
  
      
      
    }
  else
    {
      background("#e6c946");
      fill(0,50);
      lbHeight=width*0.05;
      rect(width*0.2,height*0.5-lbHeight*0.5,width*0.6,lbHeight,lbHeight*0.5);
      fill("#5E0004");
      rect(width*0.2,height*0.5-lbHeight*0.5,lbHeight+(width*0.6 - lbHeight)*(loadCompleteCount/102),lbHeight,lbHeight*0.5);
    }
  
  
}


function mousePressed() {
   //song.play();
}

var c;

window.onscroll = function () {
  c++;
};

function deviceTurned() {
  recalculate();
  resizeCanvas(windowWidth, windowHeight);
  button.position(windowWidth - 100, 20);
}

function windowResized() {
  recalculate();
  resizeCanvas(windowWidth, windowHeight);
  //button.position( windowWidth -100 , 20 );
}



function mouseWheel(event) {
  temp = -event.deltaX - event.deltaY;

  if (horizontalScroll) x += Math.sign(temp) * scrollSpeed;

  //move the square according to the vertical scroll amount

  //uncomment to block page scrolling
  //return false;
}

function mouseDragged() {
  if (horizontalScroll) {
    x += -pmouseX + mouseX;
    x += -pmouseY + mouseY;
  }
}

function soundplay(songNo,x,i)
{
  var mp = displayw * i + vel + x - windowWidth / 2;
  if(mp < 100 && mp > -100)
    {
      if (!song[songNo].isPlaying() && !soundClickedValue)
        {
          song[songNo].play();
        }
        
    }
}

function subf(imgNo, x, y, i, p, ob) {
  
  x = x * (displayw / 1920);
  i-=1;
  y = y * (windowHeight / 1080);
  var mp = displayw * i + vel + x + pimg[imgNo].width*ratio - windowWidth / 2;
  var o = 255;
  
  
  if (mp < windowWidth && mp > -windowWidth) {
    
    if(p>0)
      {
        p = p * (displayw / 1920);
        p = map(mp,-displayw/2,displayw/2,-p/2,p/2);
      }
    
    if(ob)
      {
         o = map(mp,windowWidth*(fullOpacity-0.5),windowWidth/2+oimg[imgNo].width*ratio*0.5,10,0);
        for(let g=0;g<o;g++)
          {
           
            
            
            image(oimg[imgNo],displayw * i + vel + x + p, y, oimg[imgNo].width*ratio, oimg[imgNo].height*ratio);
            
            
          }
      }
    else
      {
        image(pimg[imgNo],displayw * i + vel + x + p, y, pimg[imgNo].width*ratio, pimg[imgNo].height*ratio);
      }
    
    
    
    //rect(displayw * i + vel + x + p, y, 100, 100);
    
    
  }
}

let screenclicked = false;

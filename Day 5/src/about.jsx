
import CustomNavBar from './CustomNavBar';


    
      import './about.css'
      // import tw from './assets/tower_photo.png';
      import Card from '@mui/material/Card';
      import CardActions from '@mui/material/CardActions';
      import CardContent from '@mui/material/CardContent';
      import CardMedia from '@mui/material/CardMedia';
      import Button from '@mui/material/Button';
      import Typography from '@mui/material/Typography';
      // import po from'./assets/ponnuu.png';
      
      const AboutPage=()=>
      {
          return(
              <>
              <header>
        <CustomNavBar />
      </header>
             
               <div>
            <div style={{display:'flex'}}>
    
           <div><h1 className="AC">Namaste!</h1>
            <br></br>
            <br></br>
            <img className="tow" style={{width:800,height:800}} src="https://pngimg.com/d/yoga_PNG21.png"></img>
            </div> 
            <div>
              <br></br>
              <br></br>
              
            <section className="about-section">
            <div className="cntainer">
              <div className="about-content">
                <h2 className="af">About Yoga!</h2>
                <h2 style={{textAlign:'center'}}>Find balance. Embrace yourself."</h2>
              <p style={{fontSize:'20px',justifyContent:'space-between'}}>
              All our courses explore transformative practices which are rooted in the energetic traditions  of Hatha Yoga, as well as Tantra, Taoism & Ayurveda.

Our approach is based on the fact that every individual is unique. No one should practice yoga in exactly the same way if they want to be truly healthy and vibrant; our yoga is empowering, positive, creative, humorous and open-minded, so you can flower as you!
              </p>
              </div>
              <div><img className="ry" src="https://pngimg.com/d/yoga_PNG119.png"></img></div>
            </div>
          </section>
          </div> 
          </div> 
          
      
          <section className="abo-section">
            <div className="tainer">
              <div className="abo-content">
                <h2 style={{fontSize:'40px'}}>Yoga Quotes</h2>
                <p style={{fontSize:'20px'}}>
                “True yoga is not about the shape of your body, but the shape of your life. Yoga is not to be performed; yoga is to be lived. Yoga doesn’t care about what you have been; yoga cares about the person you are becoming. Yoga is designed for a vast and profound purpose, and for it to be truly called yoga, its essence must be embodied.” — Aadil Palkhivala
                </p>
              </div>
              <div className="ima-container">
                <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-sportive-girl-white-background_176420-5491.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=ais" alt="About" className="about-image" />
              </div>
            </div>
          </section>
         
          
         
          
            
            <br></br>
            <br></br>
            <div className="ca">
      
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/free-photo/front-view-young-attractive-girl-blue-shirt-black-trousers-sport-outfit-doing-workouts-smiling-white_140725-18386.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              OM (aum)
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Many ancient philosophical texts consider Om to be the sound of the universe, embracing all other sounds within it. Om is known as Pranava in Sanskrit, which means "to hum," and is regarded as an infinite or eternal sound. Many cultures and religions adapted a very similar sound as their prayer, like Amen (sound almost like AUM) in Chrstianity.
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
      
          
      
          
          
          <div className="cd">
      
        
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://img.freepik.com/premium-photo/beautiful-woman-meditates-while-practicing-yoga_38561-26.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Yoga (yoh -gha)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Yoga is derived from the Sanskrit word yuj, which means "to yoke" or "to unite." The practice seeks to unite the body, mind, and spirit, as well as the personal and universal awareness and consciousness.
          it is one of Hinduism's four main philosophical principles. It is also a law of righteousness and truth, giving legitimacy to the customs, behaviors, and ethics that allow life to exist.


          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
  
      </div>
      <div className="cd">
      
        
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/premium-photo/portrait-smiling-relaxed-asian-fitness-girl-female-athlete-sportswear-sitting-rubber-mat-lotus-pose-with-closed-eyes-meditating-practice-yoga-releasing-stress-morning-exercises_1258-24901.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Asana (ah -sun -ah)
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Traditional definitions of asana include the seated position used for meditation and come from the Sanskrit word for "seat." Any physical Hatha yoga posture that can be found in all forms of yoga practice, including Vinyasa, Ashtanga, Restorative, and Bikram, is now commonly referred to by this term. Asana is frequently used as a suffix to a pose's name in Sanskrit. 
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
      
          </div>
      
      
      
      
      <div className="cd">
      
        
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/free-photo/beautiful-girl-is-engaged-yoga-studio_1157-29232.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Ahimsa (ah -himn -sah)
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Ahimsa is a Sanskrit term that means "nonviolence." The term comes from the root word himsa, which means "to cause pain," and the prefix ‘a’, which means "not.” In broader way Ahimsa means "unified love and compassion", Ahimsa practice refraining from causing physical and psychological pain to any living being , Ahimsa is being nonviolent in thought and action, in body and soul.
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
      
          </div>
      
          </div>
          <br></br>
          <br></br>
          <br></br>
      
            <div className="w">
      
          <img className="ponnu" src="https://img.freepik.com/premium-photo/caucasian-woman-with-athletic-body-sitting-lotus-position_88135-14097.jpg?size=626&ext=jpg&ga=GA1.1.407889468.1684387029&semt=ais" alt="pi"></img>

          <div className="or">
      
            <h2 className="highlight-text">Why Study with Us?   </h2>
            <br></br>
            <p>
              
All our courses explore transformative practices which are rooted in the energetic traditions  of Hatha Yoga, as well as Tantra, Taoism & Ayurveda. Our teachers are authentic, experienced, compassionate and committed to helping you learn yoga and find your own unique path (dharma) in life
Our approach is based on the fact that every individual is unique. All the classes are designed to give the space for each person to practice in the way that they need and want to. No one should practice yoga in exactly the same way if they want to be truly healthy and vibrant; our yoga is empowering, positive, creative, humorous and open-minded, so you can flower as you!
            </p>
           
          </div>
          
             </div>
          </div>
              </>
          )
      }
      export default AboutPage;
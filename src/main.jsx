import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"waste","emailId":"waste@gmail.com","phoneNo":"12345","projects":[{"title":"waste","description":"vwaste","technologiesUsed":[],"_id":"674968ade5f6c17ed9c49dfb"}],"resume":"","experiences":[{"companyName":"waste","role":"waste","description":"waste","technologiesUsed":[],"duration":"waste","_id":"674968ade5f6c17ed9c49dfc"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"waste","description":"waste","_id":"674968ade5f6c17ed9c49dfd"}],"about":"waste","profilePhoto":"","_id":"674968ade5f6c17ed9c49dfa","createdAt":"2024-11-29T07:09:33.539Z","updatedAt":"2024-11-29T07:09:33.539Z","__v":0}} />
  </StrictMode>,
)

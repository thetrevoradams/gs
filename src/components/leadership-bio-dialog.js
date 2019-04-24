// import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
// import Button from '@material-ui/core/Button'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogTitle from '@material-ui/core/DialogTitle'
// import Drawer from '@material-ui/core/Drawer'
// import Svg from '../components/svg'

// import Bios from '../biographies/bios'
// // import Svg from './svg'

// /** @jsx jsx */
// import { jsx, css } from '@emotion/core'

// const closeBtn = css`
//   position: fixed;
//   margin-left: 20px;
//   background-color: #3194d2;
//   border-radius: 50%;
//   height: 64px;
//   width: 64px;
//   z-index: 10;

//   &:hover {
//     background-color: #2a81b8;
//   }
// `
// const bioOverlay = css`
//   position: absolute;
//   bottom: 0;
//   height: 125px;
//   width: 100%;
//   background: linear-gradient(
//     180deg,
//     rgba(255, 255, 255, 0.9) 49.83%,
//     rgba(255, 255, 255, 0) 148.4%
//   );
//   transform: rotate(-180deg);
// `
// const dialogTitle = css`
//   position: fixed !important;
//   background-color: #fff;
//   width: calc(100% - 432px);
//   max-width: 946px;
//   margin-top: -16px;
//   height: 120px;
//   font-family: 'Montserrat' sans-serif;
//   letter-spacing: 0.08em;

//   * {
//     color: #403a34;
//   }

//   .name {
//     font-size: 38px;
//     font-weight: bold;
//   }
//   .position {
//     font-size: 22px;
//   }
// `

// const LeadershipBioDialog = ({
//   config: { image, name, position, bioName = '', phone = '', fax = '', email },
//   dialogOpen,
//   dialogCloseHandler,
// }) => {
//   return (
//     <div className="bioDialogWrapper">
//       <Dialog
//         open={dialogOpen}
//         onClose={dialogCloseHandler}
//         onBackdropClick={dialogCloseHandler}
//         maxWidth="lg"
//         scroll="paper"
//         aria-labelledby="scroll-dialog-title"
//       >
//         <Drawer
//           className="bioSidebar"
//           variant="permanent"
//           open={true}
//           anchor="left"
//         >
//           <img src={image} alt={name} style={{ objectFit: 'contain' }} />
//         </Drawer>
//         <section className="bioSection">
//           <DialogActions>
//             <Button css={closeBtn} onClick={dialogCloseHandler}>
//               <Svg icon="CloseX" color="#f2f2f2" />
//             </Button>
//           </DialogActions>
//           <DialogTitle id="scroll-dialog-title" css={dialogTitle}>
//             <div className="name">{name}</div>
//             <div className="position">{position}</div>
//           </DialogTitle>
//           <DialogContent style={{ margin: '120px 0' }}>
//             {Bios[bioName].map((text, index) => (
//               <p key={`${name}${index}`} className="bioText">
//                 {text}
//               </p>
//             ))}
//             <div css={bioOverlay} />
//           </DialogContent>
//         </section>
//       </Dialog>
//     </div>
//   )
// }

// export default LeadershipBioDialog

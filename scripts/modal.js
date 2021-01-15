/**
 * Creation of the modal with its content
 */
customElements.define(
  'modal-page',
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Rules - Roll & Hold</ion-title>
          <ion-buttons slot="primary">
            <ion-button onClick="dismissModal()">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>The rules are simple :
          <ul>
            <li>The first player to hold 100 points in his global score wins.</li>
            <li>To do so, roll the die. You can roll it as many times as you want. 
              The result adds up in your current score. However, if you roll the die 
              and obtain 1, your current score is lost, and it's the end of your turn. <br/>
              If you are happy with your current score, you can hold it by clicking the 
              'Hold' button, to add it to your global score, and it's the end of your
              turn.
            </li>
            <li>The red dot on the right side of the player's name and the grey background
              show whose turn it is.
            </li>
            <li>Try to be strategic with your rolls, and don't be too greedy.</li>
            <li>To close this dialog box and start playing, click the 'X' on the top-right 
              corner.
            </li>
            <li>One last word : Good luck and have fun.</li>
          </ul>
        </p>
      </ion-content>`;
    }
  }
);

/**
 * Function to present the modal
 */
const presentModal = () => {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.cssClass = 'my-custom-class';
  modalElement.id = 'ion-modal-rules';

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
};

/**
 * Function to dismiss the modal
 */
const dismissModal = () => {
  document.body.removeChild(document.getElementById('ion-modal-rules'));
};

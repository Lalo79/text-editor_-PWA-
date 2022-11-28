const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    butInstall.style.visibility = 'visible';
    // textHeader.textContent = 'Click the button to install!';
    deferredPrompt = event;
    

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    deferredPrompt = null;


});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});

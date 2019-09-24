const game = {Developer: 'Sony', Title:'The Witness', Release:2018};
console.log('Developer' in game);
delete this.Developer;
if ('Developer' in this === false){
    this.Developer = 'Atari';
}
console.log(this.Developer)
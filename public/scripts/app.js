$(document).ready(()=>{


  $(function() {
    const $button = $('#addOption');
    //catches user input
    $button.on('submit', (event) => {
      event.preventDefault();
        let $option = $( `<div><textarea class="optionBox" name="text" placeholder="Enter option"></textarea></div>`)
        $('.optionBox').append($option);
      });
    });
})

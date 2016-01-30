(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText : 'nic nie zaznaczono',
    noneResultsText  : 'brak wyników wyszukiwania',
    countSelectedText: 'zaznaczono {0} z {1}',
    maxOptionsText   : ['Osiągnięto limit ({n} {var} max)', 'Limit grupy osiągnięty ({n} {var} max)', ['elementy', 'element']],
    selectAll        : 'zaznacz wszystkie',
    deselectAll      : 'odznacz wszystkie',
    multipleSeparator: ', ',
    iconBase         : 'icon',
    tickIcon         : 'wb-check'
  };
}(jQuery));
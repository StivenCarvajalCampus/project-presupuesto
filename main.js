
import myOperaciones from "./componentes/myOperaciones.js";
myOperaciones.render_local_cards(operaciones.data.expenses, 'cards_plus')
myOperaciones.render_local_cards(operaciones.data.renevu, 'cards_less')
//myContainer.showHeader();
myOperaciones.render_operation();
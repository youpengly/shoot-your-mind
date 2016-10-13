import { Position } from './position';
import { Mind } from './mind';
import { Line } from './line';
import { Idea } from './idea';

export const INIT_POSITION: Position = {
    left: 0,
    top: 0
};

export const INIT_MIND: Mind = {
    id: "",
    title: "",
    description: ""
};

export const INIT_IDEA: Idea = {
    id: "",
    text: "",
    left: 0,
    top: 0
};

export const INIT_LINE: Line = {
    id: "",
    ideaA: INIT_IDEA,
    ideaB: INIT_IDEA
};

export const INIT_MINDS = {"mind1476180237030":{"id":"mind1476180237030","title":"Shoot Your Mind Architecture","description":"Using Angular 2, ngrx, localStorage, Bootstrap.","deleted":false,"ideas":{"idea1476180259242":{"history":[{"id":"idea1476180259242","historyId":"idea-history1476180780421","text":"ngrx Store","note":"minds;\nideas;\nlines;\nselectedIdeaHistory;","left":443,"top":27,"width":112,"height":72,"backgroundColor":"#87CEFA","centerX":499,"centerY":63,"isEditing":false,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476180557236":{"history":[{"id":"idea1476180557236","historyId":"idea-history1476180752172","text":"Smart Components","note":"minds-list;\nmind-detail;","left":443,"top":194,"width":112,"height":89,"backgroundColor":"white","centerX":499,"centerY":238.5,"isEditing":false,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476180599417":{"history":[{"id":"idea1476180599417","historyId":"idea-history1476180757859","text":"Dumb Components","note":"mind-map;\nidea;\ncanvas;\n...","left":443,"top":360,"width":112,"height":89,"backgroundColor":"white","centerX":499,"centerY":404.5,"isEditing":false,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476180658487":{"history":[{"id":"idea1476180658487","historyId":"idea-history1476180658487","text":"Service","note":"","left":267,"top":108,"width":112,"height":72,"backgroundColor":"white","centerX":323,"centerY":144,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476180664005":{"history":[{"id":"idea1476180664005","historyId":"idea-history1476180664005","text":"Server","note":"Actually it is only localStorage.","left":74,"top":68,"width":112,"height":72,"backgroundColor":"white","centerX":130,"centerY":104,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476182933601":{"history":[{"id":"idea1476182933601","historyId":"idea-history1476182933601","text":"Minds List","note":"","left":628,"top":122,"width":112,"height":72,"backgroundColor":"#F0E68C","centerX":684,"centerY":158,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476182944530":{"history":[{"id":"idea1476182944530","historyId":"idea-history1476182944530","text":"Mind Detail","note":"","left":626,"top":219,"width":112,"height":72,"backgroundColor":"#F08080","centerX":682,"centerY":255,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476182982445":{"history":[{"id":"idea1476182982445","historyId":"idea-history1476182982445","text":"Mind Map","note":"","left":627,"top":368,"width":112,"height":72,"backgroundColor":"#98FB98","centerX":683,"centerY":404,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476182996682":{"history":[{"id":"idea1476182996682","historyId":"idea-history1476182996682","text":"Canvas","note":"","left":823,"top":168,"width":112,"height":72,"backgroundColor":"white","centerX":879,"centerY":204,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476183033080":{"history":[{"id":"idea1476183033080","historyId":"idea-history1476183033080","text":"Idea","note":"","left":829,"top":281,"width":112,"height":72,"backgroundColor":"white","centerX":885,"centerY":317,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476183047839":{"history":[{"id":"idea1476183047839","historyId":"idea-history1476183047839","text":"New Idea","note":"","left":827,"top":384,"width":112,"height":72,"backgroundColor":"white","centerX":883,"centerY":420,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476183121560":{"history":[{"id":"idea1476183121560","historyId":"idea-history1476183121560","text":"Idea History","note":"","left":956,"top":166,"width":112,"height":72,"backgroundColor":"white","centerX":1012,"centerY":202,"isDeleted":false,"isSelected":false}],"deleted":false}},"lines":{"line1476180711384":{"line":{"id":"line1476180711384","ideaAId":"idea1476180259242","ideaBId":"idea1476180557236"},"deleted":false},"line1476180714711":{"line":{"id":"line1476180714711","ideaAId":"idea1476180557236","ideaBId":"idea1476180599417"},"deleted":false},"line1476180723872":{"line":{"id":"line1476180723872","ideaAId":"idea1476180557236","ideaBId":"idea1476180658487"},"deleted":false},"line1476180727338":{"line":{"id":"line1476180727338","ideaAId":"idea1476180658487","ideaBId":"idea1476180664005"},"deleted":false},"line1476180730574":{"line":{"id":"line1476180730574","ideaAId":"idea1476180658487","ideaBId":"idea1476180259242"},"deleted":false},"line1476182951244":{"line":{"id":"line1476182951244","ideaAId":"idea1476180557236","ideaBId":"idea1476182933601"},"deleted":false},"line1476182953069":{"line":{"id":"line1476182953069","ideaAId":"idea1476180557236","ideaBId":"idea1476182944530"},"deleted":false},"line1476183053972":{"line":{"id":"line1476183053972","ideaAId":"idea1476180599417","ideaBId":"idea1476182982445"},"deleted":false},"line1476183091557":{"line":{"id":"line1476183091557","ideaAId":"idea1476182982445","ideaBId":"idea1476182996682"},"deleted":true},"line1476183126716":{"line":{"id":"line1476183126716","ideaAId":"idea1476182982445","ideaBId":"idea1476183033080"},"deleted":false},"line1476183128013":{"line":{"id":"line1476183128013","ideaAId":"idea1476182982445","ideaBId":"idea1476183047839"},"deleted":false},"line1476183129388":{"line":{"id":"line1476183129388","ideaAId":"idea1476182982445","ideaBId":"idea1476183121560"},"deleted":false},"line1476183157325":{"line":{"id":"line1476183157325","ideaAId":"idea1476182944530","ideaBId":"idea1476182982445"},"deleted":false},"line1476183170182":{"line":{"id":"line1476183170182","ideaAId":"idea1476182982445","ideaBId":"idea1476182996682"},"deleted":false}}},"mind1476185128185":{"id":"mind1476185128185","title":"How to use? Take a tour!","description":"There is no center node, hug free style mind map~","deleted":false,"ideas":{"idea1476185154234":{"history":[{"id":"idea1476185154234","historyId":"idea-history1476193537337","text":"Click the \"history\" below to see all the changes  ୧(⁼̴̶̤̀ω⁼̴̶̤́)૭","note":"","left":486,"top":19,"width":112,"height":157,"backgroundColor":"white","isEditing":false,"centerX":542,"centerY":97.5,"isSelected":false,"isDeleted":false},{"id":"idea1476185154234","historyId":"idea-history1476193524368","text":"Click the \"history\" below to see all the changes  ୧(⁼̴̶̤̀ω⁼̴̶̤́)૭","note":"In \"Trash\" you can find all deleted ideas.","left":529,"top":51,"width":114,"height":159,"backgroundColor":"white","isEditing":false,"centerX":586,"centerY":130.5,"isSelected":true,"isDeleted":false},{"id":"idea1476185154234","historyId":"idea-history1476193499704","text":"Click the \"history\" below to see all the changes  ୧(⁼̴̶̤̀ω⁼̴̶̤́)૭","note":"You can recover a history, or delete it forever.","left":529,"top":51,"width":114,"height":159,"backgroundColor":"white","isEditing":false,"centerX":586,"centerY":130.5,"isSelected":true,"isDeleted":false},{"id":"idea1476185154234","historyId":"idea-history1476193475489","text":"Click the \"history\" below to see all the changes  ୧(⁼̴̶̤̀ω⁼̴̶̤́)૭","note":"Click anywhere on the canvas to hide history window.","left":529,"top":51,"width":114,"height":159,"backgroundColor":"white","isEditing":false,"centerX":586,"centerY":130.5,"isSelected":true,"isDeleted":false}],"deleted":false},"idea1476185487003":{"history":[{"id":"idea1476185487003","historyId":"idea-history1476186567478","text":"Click the \"brush\" below to change my color   ٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ","note":"","left":181,"top":62,"width":112,"height":157,"backgroundColor":"#87CEFA","isEditing":false,"centerX":237,"centerY":140.5,"isSelected":false,"isDeleted":false}],"deleted":false},"idea1476185508504":{"history":[{"id":"idea1476185508504","historyId":"idea-history1476186095935","text":"Click the \"note\" to take some note             ヾ(๑╹◡╹)ﾉ\"","note":"some thongts...","left":327,"top":32,"width":112,"height":140,"backgroundColor":"white","isEditing":false,"centerX":383,"centerY":102,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476185602320":{"history":[{"id":"idea1476185602320","historyId":"idea-history1476193621999","text":"I am deleted (ɵ̷̥̥᷄﹏ɵ̷̥̥᷅) Please save me!","note":"","left":383,"top":176,"width":112,"height":123,"backgroundColor":"white","isEditing":false,"centerX":439,"centerY":237.5,"isDeleted":false,"isSelected":false}],"deleted":true},"idea1476185638419":{"history":[{"id":"idea1476185638419","historyId":"idea-history1476186047546","text":"Click the \"edit\" to change your idea      (..◜ᴗ◝..)","note":"","left":636,"top":25,"width":112,"height":123,"backgroundColor":"white","isEditing":false,"centerX":692,"centerY":86.5,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476185704351":{"history":[{"id":"idea1476185704351","historyId":"idea-history1476191976021","text":"Click the \"delete\" to delete me     (•̀へ•́╮)","note":"","left":748,"top":153,"width":112,"height":123,"backgroundColor":"white","isEditing":false,"centerX":804,"centerY":214.5,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476185724834":{"history":[{"id":"idea1476185724834","historyId":"idea-history1476186547773","text":"Drag me  ƪ(‾ε‾“)ʃ","note":"","left":31,"top":163,"width":112,"height":89,"backgroundColor":"white","isEditing":false,"centerX":87,"centerY":207.5,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476186628459":{"history":[{"id":"idea1476186628459","historyId":"idea-history1476186628459","text":"Click anywhere on canvas to add new Idea","note":"","left":423,"top":292,"width":112,"height":140,"backgroundColor":"white","isEditing":false,"centerX":479,"centerY":362,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476186681597":{"history":[{"id":"idea1476186681597","historyId":"idea-history1476186762802","text":"Draw line between ideas with right mouse","note":"","left":268,"top":233,"width":112,"height":123,"backgroundColor":"white","isEditing":false,"centerX":324,"centerY":294.5,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476186821992":{"history":[{"id":"idea1476186821992","historyId":"idea-history1476186821992","text":"Delete line by draw a cross line with left mouse","note":"","left":67,"top":405,"width":112,"height":140,"backgroundColor":"white","isEditing":false,"centerX":123,"centerY":475,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476186851584":{"history":[{"id":"idea1476186851584","historyId":"idea-history1476186851584","text":"Try to delete this line","note":"","left":685,"top":431,"width":112,"height":89,"backgroundColor":"white","isEditing":false,"centerX":741,"centerY":475.5,"isDeleted":false,"isSelected":false}],"deleted":false},"idea1476186950003":{"history":[{"id":"idea1476186950003","historyId":"idea-history1476186950003","text":"Enjoy your free style Mind Map!","note":"","left":879,"top":11,"width":112,"height":106,"backgroundColor":"#98FB98","isEditing":false,"centerX":935,"centerY":64,"isDeleted":false,"isSelected":false},{"id":"idea1476186950003","historyId":"idea-history1476186950003","text":"Enjoy your free style Mind Map!","note":"","left":1053,"top":257,"width":112,"height":106,"backgroundColor":"#F4A460","isEditing":false,"centerX":1109,"centerY":310},{"id":"idea1476186950003","historyId":"idea-history1476186950003","text":"Enjoy your free style Mind Map!","note":"","left":1053,"top":257,"width":112,"height":106,"backgroundColor":"white","isEditing":false,"centerX":1109,"centerY":310}],"deleted":false},"idea1476361592273":{"history":[{"id":"idea1476361592273","historyId":"idea-history1476361592273","text":"Click the \"check\" to mark me as done","note":"","left":593,"top":273,"width":112,"height":123,"backgroundColor":"white","isEditing":false,"centerX":649,"centerY":334.5}],"deleted":false}},"lines":{"line1476186592033":{"line":{"id":"line1476186592033","ideaAId":"idea1476185724834","ideaBId":"idea1476185487003"},"deleted":false},"line1476186593026":{"line":{"id":"line1476186593026","ideaAId":"idea1476185487003","ideaBId":"idea1476185508504"},"deleted":false},"line1476186594041":{"line":{"id":"line1476186594041","ideaAId":"idea1476185508504","ideaBId":"idea1476185154234"},"deleted":false},"line1476186594872":{"line":{"id":"line1476186594872","ideaAId":"idea1476185154234","ideaBId":"idea1476185638419"},"deleted":false},"line1476186595680":{"line":{"id":"line1476186595680","ideaAId":"idea1476185638419","ideaBId":"idea1476185704351"},"deleted":false},"line1476186854354":{"line":{"id":"line1476186854354","ideaAId":"idea1476186821992","ideaBId":"idea1476186851584"},"deleted":true},"line1476361596524":{"line":{"id":"line1476361596524","ideaAId":"idea1476185704351","ideaBId":"idea1476361592273"},"deleted":false},"line1476361730128":{"line":{"id":"line1476361730128","ideaAId":"idea1476361592273","ideaBId":"idea1476186628459"},"deleted":false},"line1476361732551":{"line":{"id":"line1476361732551","ideaAId":"idea1476186628459","ideaBId":"idea1476186681597"},"deleted":false},"line1476361811266":{"line":{"id":"line1476361811266","ideaAId":"idea1476186821992","ideaBId":"idea1476186851584"},"deleted":false}}}};
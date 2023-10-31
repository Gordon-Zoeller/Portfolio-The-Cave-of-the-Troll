export function handleInput(e, plot, setPlot, dispatch) {
    switch(e.key) {
        case "Enter": let zero;
                      if(e.target.value === plot[0]?.command?.command || e.target.value === plot[0]?.command.command.concat(" ", plot[0].command2) || e.target.value === plot[0]?.command3?.command) {
                          switch(e.target.value) {
                            case plot[0]?.command.command: 
                                zero = plot.filter(obj => obj.id === plot[0]?.command?.nextId);
                            break;
                            case plot[0]?.command.command.concat(" ", plot[0].command2):
                                zero = plot.filter(obj => obj.id === plot[0]?.command?.nextId);
                                dispatch({type: `${plot[0]?.command.command.concat(" ", plot[0].command2)}`, payload: `${plot[0].command2}`});
                            break;
                            default: //plot[0]?.command3?.command
                                zero = plot.filter(obj => obj.id === plot[0]?.command3?.nextId);
                          };
                          setPlot([...zero, ...plot]);
                      } else if((e.target.value === "inventory" || e.target.value === "quit") && plot[0]?.id >= 2) {
                          dispatch({type: `${e.target.value}`});
                      };
                      e.target.value = "";
        break;
    };
};
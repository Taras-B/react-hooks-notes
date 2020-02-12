import React, { useContext } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'


export const Notes = ({ notes, onRemove }) => {
    const alert = useContext(AlertContext)
    const onDeleteNote = (id) => {
        onRemove(id)
        alert.show('Ви видалили замітку', 'danger')
    }
    return (

        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id} 
                    classNames="note"
                    timeout={700}>
                        <li className="list-group-item notes">
                            <div>
                                <strong>{note.title}</strong>
                                <small>{note.date}</small>
                            </div>
                            <button onClick={() =>onDeleteNote(note.id) } type="button" className="btn btn-danger btn-sm">&times;</button>
                        </li>
                </CSSTransition>
            ))}
        </TransitionGroup>

    )
}

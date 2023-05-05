const Actions = (props) => {
    return (<>
        {props.actionList.map((el, index) => {
            return (
                <li key={index} className="flex w-142 h-142">
                    <div style={{ backgroundImage: `${el.photo}` }} className={`bg-notes bg-contain bg-no-repeat basis-36 grow-1 mr-5`}>
                    </div>
                    <div className="basis-36 grow-2 h-36 my-3.5">
                        <p className="text-xl font-[700]">{el.action}
                        </p>
                        <p className="text-base font-[400]">{el.prompt}
                        </p>
                    </div>
                </li >
            )
        })}

    </>);
}

export default Actions;
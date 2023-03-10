import './Table.css';

function Table({title, data}) {

    return (
      <>
        <div className="grid bg-[#29142c] mr-5 p-5 my-3 rounded-lg text-white font-mono" >
          <div className="col-span-1 text-center">{title}
          <hr className='py-2'></hr>
          </div>
          <div className="">
          {Object.entries(data).map((oKey, i) => {
                return (
                  <div key={i} className="grid grid-cols-3">
                    <div className="justify-self-start">{oKey[0]}</div>
                    <div></div>
                    {title === "Skills" ? (
                      <div className="pr-1">
                        <div className="w-full bg-yellow-200 rounded-full dark:bg-gray-700">
                          <div
                            className={"bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"}
                            style={{ width: `${oKey[1]}%` }}
                          >
                            {oKey[1]}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="justify-self-end pr-1">
                        <div className="justify-self-end">{oKey[1]}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            {/* <div className="text-right pr-2">{data}</div> */}
          </div>
        </div>
      </>
    );

} export default Table;
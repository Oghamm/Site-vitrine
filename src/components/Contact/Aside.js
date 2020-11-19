import React from "react"

const Aside = ({ setFomValueReason }) => {
  return (
    <>
      <h3 className="aside__title--title">
        Pour quels <br /> raison(s) <br /> vous nous contactez ?
      </h3>

      <div className="form-group select select-white">
        <select
          name="reason"
          id="reason"
          className="form-control"
          onChange={e => {
            setFomValueReason(e.target.value)
          }}
        >
          <option value="problem">Un problème technique ?</option>
          <option value="question">une question ?</option>
        </select>
      </div>
    </>
  )
}

export default Aside

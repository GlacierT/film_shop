import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Фільм</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Назва фільму</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Ціна</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Кідбкімть</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Видалити</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Сумарно</p>
            </div>
        </div>
    </div>
  )
}

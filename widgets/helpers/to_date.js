// import
import moment from 'moment'

// to_date
const to_date = (time) => {
  return moment(time).locale('ru').format('DD MMMM YYYY')
}

// export
export default to_date

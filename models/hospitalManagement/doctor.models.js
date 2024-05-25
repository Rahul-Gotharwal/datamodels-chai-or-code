import mongoose from 'mongoose';
const doctorSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    salary: {
      type: String,
      required: true,
    },
    qualificaton: {
      type: String,
      required: true,
    },
    experianceInyears: {
      type: Number,
      default: 0,
    },
    worksInHsopiotals:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
      }
    ]
  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);

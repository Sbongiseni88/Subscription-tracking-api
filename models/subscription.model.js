import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required'],
        unique: true,
        trim : true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: [true,'Price is required'],
        min: 0,
        max: 1000
    },
    currancy: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'ZAR'],
        default: 'ZAR'
    },
    frequency: {
        type: String,
        enum: ['weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum:['Entertainment','Productivity','Education','Health & Fitness','Finance','Utilities','Other'],
        required: [true,'Category is required']
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'Cryptocurrency', 'Other'],
        required: [true,'Payment method is required'],
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true,'Start date is required'],
        validate: {
            validator: function(value) {
                return value <= new Date();
                },
            message: 'Start date should be in the past'
        }
    },
    renewalDate: {
        type: Date,
      //  required: [true,'Renewal date is required'],
        validate: {
            validator: function(value) {
                return value > this.startDate;
                },
            message: 'Renewal date should be after start date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'User is required'],
        index: true
    },
    options: { timestamps: true}
});
subscriptionSchema.pre('save', async function(next) {
    if (!this.startDate ||!this.renewalDate) {
        const renewalPeriods={
            'weekly': 7,
            'monthly': 30,
            'yearly': 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (this.renewalDate <= this.startDate) {
        this.status = 'inactive';
    }
    next();
});



const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
// This file defines the Subscription model with fields for name, price, currency, frequency, category, payment method, status, start date, renewal date, and user reference.
// It includes validation rules and a pre-save hook to automatically set the renewal date based on the frequency if not provided.

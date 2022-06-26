const {PrismaClient} = require('@prisma/client')
const { hashSync } = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data:{
        name:"Super Admin",
        email:"superadmin@admin.com",
        password:hashSync("admin123",12),
        address:"Yangon",
        isActive:true,
        phone:"09123456789"
    }
  })
  await prisma.setting.create({
        data:{
            appNm:"ဗိုလ်ချုပ်အောင်ဆန်းပြတိုက်",
            address:"ရန်ကုန်",
            descrption:".......",
            email:"admin@admin.com",
            phone:"09123456789",
            map:"....",
            
        }
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
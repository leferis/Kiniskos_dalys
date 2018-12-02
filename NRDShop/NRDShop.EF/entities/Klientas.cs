using System;
using System.Collections.Generic;
using System.Text;

namespace NRDShop.EF.entities
{
   public partial class Klientas
    {
    public int id { get; set; }
    public string slapyvardis { get; set; }
    public string Vardas { get; set; }
    public string Pavarde { get; set; }
    public string Slaptazodis { get; set; }
    public string Tipas { get; set; }
  }
}

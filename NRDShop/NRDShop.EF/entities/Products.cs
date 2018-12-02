using System;
using System.Collections.Generic;

namespace NRDShop.EF.entities
{
    public partial class Products
    {
        public int Id { get; set; }
        public string Matmenys { get; set; }
        public string Kilme { get; set; }
        public string Svoris { get; set; }
        public decimal Aukstis { get; set; }
        public decimal ilgis { get; set; }
        public string pavadinimas { get; set; }
    public decimal Pirkimo_kaina { get; set; }
    public decimal Pardavimo_Kaina { get; set; }
    public string Kategorija { get; set; }


    }
}

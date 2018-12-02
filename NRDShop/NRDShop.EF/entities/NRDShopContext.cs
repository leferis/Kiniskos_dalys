using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using NRDShop.EF.entities;

namespace NRDShop.EF.entites
{
    public partial class NRDShopContext : DbContext
    {
        public NRDShopContext(DbContextOptions<NRDShopContext> options) : base(options)
        {
        }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Products> Products { get; set; }
      public virtual DbSet<Klientas> Klientas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Products>(entity =>
            {
              entity.Property(e => e.Id).ValueGeneratedNever();

              entity.Property(e => e.Aukstis)
                  .IsRequired()
                  .IsUnicode(false);

              entity.Property(e => e.pavadinimas)
                  .IsRequired()
                  .HasMaxLength(20)
                  .IsUnicode(false);

              entity.Property(e => e.ilgis).HasColumnType("decimal(18, 0)");

              entity.Property(e => e.Pirkimo_kaina).HasColumnType("decimal(18, 0)");

              entity.Property(e => e.ilgis)
                  .HasMaxLength(50)
                  .IsUnicode(false);

            });
        }
    }
}

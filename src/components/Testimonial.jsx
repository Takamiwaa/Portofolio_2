import { useState } from "react";

// Mock data testimonials (kosong)
const mockTestimonials = [];

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full mx-4 transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <i className="bx bx-x text-2xl"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(mockTestimonials);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    position: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonialsPerPage = 5;

  // Hitung total halaman dan data untuk halaman saat ini
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  // Fungsi untuk ganti halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fungsi untuk halaman sebelumnya dan berikutnya
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Testimonial is required';
    } else if (formData.content.trim().length < 10) {
      newErrors.content = 'Testimonial must be at least 10 characters';
    }

    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulasi API call (nanti ganti dengan Supabase insert)
    setTimeout(() => {
      const newTestimonial = {
        id: testimonials.length + 1,
        name: formData.name,
        email: formData.email,
        content: formData.content,
        position: formData.position,
        rating: 5,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=1f2937&color=fff&size=100`
      };

      setTestimonials(prev => [...prev, newTestimonial]);
      setFormData({ name: '', email: '', content: '', position: '' });
      setIsModalOpen(false);
      setIsSubmitting(false);

      // Show success message
      setTimeout(() => {
        alert('✨ Testimonial submitted successfully! Thank you for your feedback.');
      }, 100);
    }, 1000);
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index}
        className={`bx bxs-star text-sm ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="pt-20 min-h-screen px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-800 dark:text-white max-w-2xl mx-auto">
            Voices from clients, collaborators, and friends who have experienced my work.
          </p>
        </div>

        {/* Add Testimonial Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg shadow-lg font-medium flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:text-white hover:shadow-lg"
            aria-label="Add a new testimonial"
          >
            <i className="bx bx-plus text-xl" />
            Add Testimonial
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.length > 0 ? (
            currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white dark:border-white"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <i className="bx bxs-quote-alt-left text-3xl text-gray-300 dark:text-gray-600" />
                </div>

                {/* Content */}
                <p className="text-gray-800 dark:text-white mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=1f2937&color=fff&size=48`;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <i className="bx bx-message-dots text-8xl text-gray-300 dark:text-gray-600 mb-6 animate-pulse" />
              <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                No Testimonials Yet
              </p>
              <p className="text-lg text-gray-800 dark:text-white max-w-md mx-auto">
                Be the first to share your experience and let others know about your journey with us!
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
              aria-label="Previous page"
            >
              <i className="bx bx-chevron-left text-lg" />
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-12 h-12 rounded-xl font-medium transition-all ${
                    currentPage === index + 1
                      ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  }`}
                  aria-label={`Page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
              aria-label="Next page"
            >
              Next
              <i className="bx bx-chevron-right text-lg" />
            </button>
          </div>
        )}
      </div>

      {/* Custom Modal */}
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bx bx-message-dots text-xl text-white dark:text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Share Your Testimonial
            </h3>
            <p className="text-sm text-gray-800 dark:text-white">
              Tell us about your experience working with us
            </p>
          </div>

          <div className="grid gap-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                Full Name
              </label>
              <div className="relative">
                <i className="bx bx-id-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-800 focus:ring-gray-800'
                  } bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-1 transition-colors`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <i className="bx bx-error-circle" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                Email
              </label>
              <div className="relative">
                <i className="bx bx-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-800 focus:ring-gray-800'
                  } bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-1 transition-colors`}
                  placeholder="name@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <i className="bx bx-error-circle" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Position Input */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                Position
              </label>
              <div className="relative">
                <i className="bx bx-briefcase absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.position 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-800 focus:ring-gray-800'
                  } bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-1 transition-colors`}
                  placeholder="CEO, Developer, Designer, etc."
                />
              </div>
              {errors.position && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <i className="bx bx-error-circle" />
                  {errors.position}
                </p>
              )}
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-1">
                Testimonial
              </label>
              <div className="relative">
                <i className="bx bx-message-detail absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    errors.content 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-800 focus:ring-gray-800'
                  } bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-1 transition-colors resize-none`}
                  placeholder="Share your experience..."
                />
              </div>
              {errors.content && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <i className="bx bx-error-circle" />
                  {errors.content}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-6 py-2 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 px-6 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="bx bx-loader-alt animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="bx bx-send" />
                    Submit
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
    </section>
  );
};

export default Testimonials;